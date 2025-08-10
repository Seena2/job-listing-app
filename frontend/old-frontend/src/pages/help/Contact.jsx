import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const formData = useActionData();
  return (
    <div className="contact">
      <h3>Contact us</h3>
      <Form method="post" action="/help/contact">
        <label htmlFor="">
          <span>Your Email: </span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="">
          <span>Your Message: </span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>

        {formData && formData.error && <p>{formData.error}</p>}
      </Form>
    </div>
  );
};

export default Contact;

//Action function
export const contactAction = async ({ request }) => {
  const data = await request.formData();
  //access individual items/values via name attribute of input field
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);
  //send post request to API to save it to DB or
  //whatever you want to do with that information

  //validating message lennght at front end
  if (submission.message.length < 10) {
    return {
      error: "Message must be atleast 10 character long",
    };
  }

  //redirect the user
  return redirect("/");
};
