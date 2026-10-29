export default function UserProfile({ user }) {
  return (
    <div className="user">
      <div>
        <img src={user.avatarUrl} alt={user.name} className="user__img" />
      </div>
      <div className="user__info">
        <h2 className="user__info-name">{user.name}</h2>
        <p className="user__info-email">{user.email}</p>
        <p className="user__info-bio">{user.bio}</p>
      </div>
    </div>
  );
}
