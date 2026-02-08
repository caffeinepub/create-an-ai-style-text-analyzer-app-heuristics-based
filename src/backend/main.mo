import Map "mo:core/Map";
import Queue "mo:core/Queue";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Time "mo:core/Time";
import List "mo:core/List";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let userChats = Map.empty<Principal, List.List<Text>>();
  let systemEvents = Queue.empty<Text>();
  let profiles = Map.empty<Principal, UserProfile>();

  module Chat {
    public func compare(chat1 : Text, chat2 : Text) : Order.Order {
      Text.compare(chat1, chat2);
    };
  };

  func addToHistory(user : Principal, input : Text, response : Text) {
    let safeHistory = switch (userChats.get(user)) {
      case (?hats) { hats };
      case (null) { List.empty<Text>() };
    };
    let entry = "User: " # input # "\nAssistant: " # response;
    safeHistory.add(entry);
    userChats.add(user, safeHistory);
  };

  public type Message = {
    text : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    username : Text;
    consentGiven : Bool;
  };

  // Get caller's own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    profiles.get(caller);
  };

  // Get another user's profile (admin only, or own profile)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    profiles.get(user);
  };

  // Save caller's own profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    profiles.add(caller, profile);

    let event = "Profile updated for " # caller.toText();
    systemEvents.pushBack(event);
  };

  // Get caller's own chat history
  public query ({ caller }) func getHistory() : async [Text] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view chat history");
    };

    switch (userChats.get(caller)) {
      case (?history) {
        history.toArray().sort(func(a, b) { Text.compare(a, b) });
      };
      case (null) {
        [];
      };
    };
  };

  // Add message to caller's own chat history
  public shared ({ caller }) func addChatMessage(input : Text, response : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can add chat messages");
    };

    addToHistory(caller, input, response);

    let event = "Chat message added for " # caller.toText();
    systemEvents.pushBack(event);
  };

  // Clear all data for the authenticated caller
  public shared ({ caller }) func clearUserData() : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can clear their data");
    };

    // Remove chat history
    userChats.remove(caller);

    // Remove profile
    profiles.remove(caller);

    let event = "User data cleared for " # caller.toText();
    systemEvents.pushBack(event);
  };

  // Get system event count (admin only, for audit purposes)
  public query ({ caller }) func getSystemEventCount() : async Nat {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view system events");
    };
    systemEvents.size();
  };
};
