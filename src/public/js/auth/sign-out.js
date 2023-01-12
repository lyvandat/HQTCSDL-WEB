export const signOut = async (e) => {
  try {
    const response = await fetch("/api/v1/auth/sign-out");

    if (!response.ok) {
      const errRes = await response.json();
      console.log(errRes.message);
      alert(errRes.message);
      return;
    }

    const data = await response.json();
    console.log("logout successfully");
    setTimeout(() => {
      // window.location.reload(true);
      alert("logout successfully");
      window.location.replace("/sign-in");
    }, 500);
  } catch (err) {
    console.log(err.message);
    alert(err.message);
  }
};
