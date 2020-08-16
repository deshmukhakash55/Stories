export type User = {
    name: string,
    profile_pic: string
};

export type Followers = User[];
export type Followings = User[];
export type BlockedUsers = User[];

export type SocialContacts = {
    followers: Followers,
    followings: Followings,
    blockedUsers: BlockedUsers
};
