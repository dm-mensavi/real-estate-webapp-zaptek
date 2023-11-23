function Post() {
  return (
    <div>
      <div className="my-[10%] flex justify-center items-center">
        <form className="">
          <div>
            <label>Listing title</label>
            <input
              type="text"
              placeholder="Smart cities expo"
              className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col mr-5 ">
              <label>Property location</label>
              <input
                type="text"
                placeholder="Apartment, Villa, Office"
                className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
              />
            </div>
            <div className="flex flex-col ">
              <label>Property type</label>
              <input
                type="text"
                placeholder="Rental or Sale"
                className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col mr-5 ">
              <label>Property location</label>
              <input
                type="text"
                placeholder="New York"
                className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
              />
            </div>
            <div className="flex flex-col ">
              <label>Land sqft.</label>
              <input
                type="text"
                placeholder="1000 sqft"
                className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Listing short description</label>
            <textarea
              placeholder="Enter event description here..."
              className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
            />
          </div>
          <div className="flex flex-col">
            <label>Listing short description</label>
            <textarea
              placeholder="Tell your attendees about the schedule..."
              className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
            />
          </div>
          <div>
            <button className="w-full border rounded py-4 my-3 hover:text-white hover:bg-primary">
              Submit for Approval
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
