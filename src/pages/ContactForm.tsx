import FrontLayout from "../layouts/FrontLayout"



function ContactForm() {
  return (
    <FrontLayout>
        <div className="max-w-md mx-auto p-4 bg-grey rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center">Contact Form</h1>
            
            <form >
                <div className="flex flex-col justify-center">

                  <label htmlFor="name" className="block mt-2">First Name</label>
                  <div className="mt-1">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label htmlFor="surname" className="mt-2">Last Name</label>
                  <div className="mt-1">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label htmlFor="age">Age</label>
                  <div className="mt-1 mb-2">
                    <input
                      id="age"
                      name="age"
                      type="number"
                      className="block w-1/2 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button type="button" className=" align-middle w-16 h-8 rounded-md bg-gray-800 px-2 py-1 text-sm text-white hover:shadow-md hover:bg-gray-600">
                    Submit
                  </button>
                </div>
            </form>
        </div>
    </FrontLayout>
  )
}

export default ContactForm