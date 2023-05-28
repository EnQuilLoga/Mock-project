import React from "react";
import tokenApi from "../../api/requestToken";

export default function LoginTest() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    tokenAxios();
  };

  const tokenAxios = async () => {
    const token = await tokenApi
      .requestToken({ username: "mor_2314", password: "83r5^_" })
      .then((response) => response);
    // const tokenResult = await token.token;         // tối về check lại phần này
    // localStorage.setItem("token", token.token);
    console.log("token: ", token);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          username: <input type="text" name="user1" />
        </label>
        <label htmlFor="">
          pasword: <input type="text" name="pass" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
