const AuthService = {
  registerUser: async (data: any) => {
    const response = await fetch('https://localhost:7048/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Registration failed');
    return await response.json();
  }
};

export default AuthService;

