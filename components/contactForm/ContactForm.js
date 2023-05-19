import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className=" p-5 mt-80 lg:max-w-[800px] mx-auto lg:mt-40">
      <div className="contact-text">
        <p className=" mb-[5rem] ">
          Pour les tarifs, les réservations et toutes autres demandes, envoyez
          un e-mail ou remplissez le formulaire ci-dessous.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid grid-cols-1 gap-[1rem]"
      >
        <div className=" grid grid-cols-2 gap-[1rem] ">
          <input
            className=" bg-transparent mb-[1rem] rounded-md p-[1rem] border-[1px] border-gray-300"
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <input
            className=" bg-transparent mb-[1rem] rounded-md p-[1rem] border-[1px] border-gray-300"
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          />
        </div>

        <input
          className=" bg-transparent mb-[1rem] rounded-md p-[1rem] border-[1px] border-gray-300"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <textarea
          {...register("Message", {})}
          rows="10"
          className=" bg-transparent mb-[1rem] rounded-md p-[1rem] border-[1px] border-gray-300"
        />

        <input
          type="submit"
          className=" bg-black text-white border-none rounded-md p-[1rem] cursor-pointer w-[20%] hover:bg-red-700 "
        />
      </form>
    </div>
  );
};

export default ContactForm;
