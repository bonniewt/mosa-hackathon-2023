import { connectToDB } from "utils/database";
import Event from "models/event";


//GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB;

    const event = await Event.findById(params?.id);

    if(!event) return new Response("Event not found", {status: 404});

    return new Response(JSON.stringify(event), {status: 200})
  } catch (error) {
    return new Response("Failed to fetch event", { status: 500 })
  }
}





//PATCH (update)

//DELETE (delete)


