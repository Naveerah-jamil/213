"use client";
import { useForm } from "react-hook-form";
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            {" "}
            <h1>Name</h1>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            {errors.name && errors.name.type === "required"  &&
            (
              <p className="font-bold text-red-500">Name is required</p>
            )}
          </div>

          <h1>Email</h1>
          <input
            {...register("email", {required: true})}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          {errors.email && errors.email.type === "required" && (
            <p className="font-bold text-red-500">Email is required</p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
