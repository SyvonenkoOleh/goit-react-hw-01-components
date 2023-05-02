import FriendListModule from '../components/FriendList.module.css';

export const FriendList = data => {
  const { friends } = data;

  return (
    <>
      <ul className={FriendListModule.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={FriendListModule.item}>
            <span
              className={
                friend.isOnline
                  ? FriendListModule.statusOnline
                  : FriendListModule.statusOffline
              }
            >
              {friend.isOnline}
            </span>
            <img
              className={FriendListModule.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={FriendListModule.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
