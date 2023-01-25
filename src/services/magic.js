import { Magic } from 'magic-sdk';

const magic = new Magic("pk_live_C978F3A837C4396C");

const saveUser= async () => {
  const user = await magic.user.getMetadata();
  console.log("registration of user started")
}

export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    console.log(user.publicAddress)
    return cb({ isLoggedIn: true, email: user.email, address:user.publicAddress });
  } return cb({ isLoggedIn: false });
};

export const loginUser = async (email, cb) => {
  await magic.auth.loginWithMagicLink({ email });
  saveUser();
  return cb({ isLoggedIn: true });
};

export const logoutUser = async () => {
  await magic.user.logout();
};
