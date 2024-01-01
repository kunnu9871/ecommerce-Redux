const signUpApi = async (bodyData) => {
  const signupResponse = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  return await signupResponse.json();
};

const logInApi = async(bodyData)=>{
  const loginResponse= await fetch(`http://localhost:3000/auth/login`,{
    method: "POST",
    headers: {
      "content-type" : "application/json",
    },
    body: JSON.stringify(bodyData),
  })

  return loginResponse.json();
};
export {signUpApi, logInApi};