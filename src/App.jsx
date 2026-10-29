import "./App.css";
import UserProfile from "./components/UserProfile";

const users = [
  {
    name: "Александра Смирнова",
    email: "alexandra.smirnova@example.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1790105684809-6697eed86bfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Frontend разработчик с 5-летним опытом работы. Люблю создавать красивые и функциональные интерфейсы.",
  },
  {
    name: "Дмитрий Иванов",
    email: "dmitry.ivanov@example.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1787528911692-3b929f30e1f5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UX/UI дизайнер, специализируюсь на мобильных приложениях.",
  },
  {
    name: "Мария Петрова",
    email: "maria.petrova@example.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1788253291752-e401dc0e9fea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Product Manager в tech стартапе. Увлекаюсь йогой и путешествиями.",
  },
];

function App() {
  return (
    <div className="page">
    <h1 className="title">User Profile</h1>
      <div className="user__list">
        {users.map(user => (
          <UserProfile key={user.name} user={user}></UserProfile>
        ))}
        </div>
    </div>
  );
}

export default App;
