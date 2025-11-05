// export interface User {
//   id: string;
//   email: string;
//   name?: string;
// }

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface OtpResponse {
  message: string;
}

// export interface AuthContextType {
//   user: User | null;
//   login: (token: string, user: User) => void;
//   logout: () => void;
// }
export interface User {
  _id: string;
  name: string;
  email: string;
  picture?: string;
  provider?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean; // 👈 indicates if AuthContext is still loading (e.g. restoring from localStorage)
  login: (token: string, user: User) => void;
  loginWithGoogle: (data: any) => void;
  logout: () => void;
}
