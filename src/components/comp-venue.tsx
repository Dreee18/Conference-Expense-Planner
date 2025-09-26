import "./comp-venue.css";
import ItemCard from "./card/item-card";
import ConferenceRoom from "../assets/images/venue-rooms/conference_room.png";
import AuditoriumHall from "../assets/images/venue-rooms/auditorium_hall.png";
import PresentationRoom from "../assets/images/venue-rooms/presentation_room.png";
import LargeMeetingRoom from "../assets/images/venue-rooms/large_conference_room.png";
import SmallMeetingRoom from "../assets/images/venue-rooms/small_meeting_room.png";

function VenueComp() {
  return (
    <div className="content-container">
      <h1 className="title" id="h1_venue">
        Venue Room <br /> Selection
      </h1>

      <div className="item-container">
        <ItemCard
          image={ConferenceRoom}
          title="Conference Room"
          capacity={15}
          price={1500}
          withCapacity={true}
        />
        <ItemCard
          image={AuditoriumHall}
          title="Auditorium Hall"
          capacity={200}
          price={5500}
          withCapacity={true}
        />
        <ItemCard
          image={PresentationRoom}
          title="Presentation Room"
          capacity={50}
          price={3500}
          withCapacity={true}
        />
        <ItemCard
          image={LargeMeetingRoom}
          title="Large Meeting Room"
          capacity={10}
          price={1000}
          withCapacity={true}
        />
        <ItemCard
          image={SmallMeetingRoom}
          title="Small Meeting Room"
          capacity={5}
          price={800}
          withCapacity={true}
        />
      </div>
    </div>
  );
}

export default VenueComp;
