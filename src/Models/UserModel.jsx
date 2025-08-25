// store/models/UserModel.js

export class UserModel {
  constructor({ id, email, fullName, created_at }) {
    this.id = id || null;
    this.email = email || "";
    this.fullName = fullName || "";
    this.createdAt = created_at || null;
  }

  static fromSupabase(user) {
    return new UserModel({
      id: user.id,
      email: user.email,
      fullName: user.user_metadata?.fullName || "",
      created_at: user.created_at,
    });
  }
}
