import React from "react";
import CoreLayout from "../../components/coreLayout";
import SubNav from "../../components/subNav/worship";

const WorshipPage = () => (
  <CoreLayout withSubtitle={false}>
    <SubNav />
    <section>
      <h2>Weekly Meeting</h2>
      <p>
        We gather for worship each First Day (Sunday) at 11:00am on the 12th
        floor of the tower in Riverside Church in New York City.
      </p>
      <p>Our weekly worship adheres to the following pattern:</p>
      <h3>Worship</h3>
      <p>
        Unprogrammed Quaker worship follows from our belief that each of us is
        capable of a direct, unmediated experience of the Eternal Presence. It
        is characterized by a deep and expectant silence, during which each
        worshipper aims to free her/himself from the distractions of daily life.
        This “centering down” allows us to be more fully alive to the Spirit.
        Occasionally, out of this silence, one or more individuals may be led to
        rise and share a message discerned to be intended for all those
        gathered. Messages that do arise are not intended to provoke discussion,
        but further inward reflection. Hence, it is our custom to follow each
        message with a period of silence.
      </p>
      <p>
        Meeting for worship begins when the first worshipper enters the room and
        begins to settle into the Silence. Its conclusion is signaled by a
        handshake initiated by the meeting coordinator.
      </p>
      <h3>Afterwords</h3>
      <p>
        Worship continues with a period called Afterwords, which provides an
        opportunity for us to build community by sharing messages of a more
        personal nature: joys, sorrows, and brief reflections that did not rise
        to the level of being shared during the main portion of worship. We ask
        that messages be kept brief, and that a worshipful atmosphere be
        maintained by allowing silence between messages, rather than lapsing
        into conversation.
      </p>
      <h3>Introductions</h3>
      <p>
        Following Afterwords, the meeting coordinator will invite members of the
        Morningside Ministry and Counsel Committee who are present to introduce
        themselves. They welcome your questions about Quakerism in general and
        Morningside in particular.
      </p>
      <p>
        At this point, visitors, newcomers, and those who are returning after a
        prolonged absence will be invited to rise and introduce themselves, in
        order that they may be greeted more fully during our Fellowship Hour.
      </p>
      <h3>Announcements</h3>
      <p>
        Friends are invited to make announcements about events of interest to
        the community.
      </p>
      <h3>Fellowship</h3>
      <p>All are welcome to share refreshments and conversation.</p>
    </section>
  </CoreLayout>
);
export default WorshipPage;
