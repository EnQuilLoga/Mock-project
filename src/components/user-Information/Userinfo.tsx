import { useForm } from "react-hook-form";
import { IUser } from "../../types/userType";

const Userinfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>({ mode: "onChange" });

  const onSubmit = (data: any) => {
    alert("Change Information successfully");
  };

  return (
    <div className="mx-96 py-7">
      <h2 className="font-sans text-3xl font-semibold  text-indigo-900 mb-5">Member Information</h2>
      <h2 className="font-sans text-2xl font-semibold  text-indigo-800 mb-12">Edit profile </h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* Email  */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="email"
              id="email"
              placeholder="nguyenquoclong11@gmail.com"
              {...register("email", {})}
              disabled
            />

            {/* username */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="username"
              value={"Enquilloga"}
              {...register("username", {})}
              disabled
            />

            {/* Password  */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type={"password"}
              id="password"
              placeholder="********"
              {...register("password", {})}
              disabled
            />

            {/*Firstname */}
            <label className=" uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="firstName"
              placeholder="Long"
              {...register("name.firstname", {})}
              disabled
            />

            {/* Lastname */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="lastName"
              placeholder="Nguyen"
              {...register("name.lastname", {})}
              disabled
            />

            {/* Phone Number  */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Phone number
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="phonenumber"
              value="8411368688"
              {...register("phone", {
                required: true,
                pattern: /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/i,
              })}
            />
            {errors?.phone?.type === "pattern" && (
              <p className="text-red-500">Wrong phone number's template</p>
            )}
            {errors?.phone?.type === "required" && (
              <p className="text-red-500">Phone number is required</p>
            )}

            {/* city */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              City
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="city"
              value="Hanoi"
              {...register("address.city", {})}
            />

            {/* street */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Street
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="street"
              value="Duy Tan"
              {...register("address.street", {})}
            />

            <button
              type="submit"
              className='bg-indigo-500 text-gray-100 text-2xl p-3 mt-12 mb-24 w-full rounded-full tracking-wide
                    font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg"'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userinfo;
