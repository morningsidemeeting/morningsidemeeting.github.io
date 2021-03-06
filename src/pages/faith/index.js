import React from "react";
import CoreLayout from "../../components/coreLayout";
import Nav from "../../components/nav/worship";

const FaithPage = () => (
  <CoreLayout withSubtitle={false}>
    <Nav />
    <section>
      <h2>Quaker Testimonies</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quasi facilis, rerum maiores minima adipisci, pariatur sunt asperiores
        dolores veritatis totam cupiditate, labore voluptatibus quod vero quia
        doloribus dolorem molestiae.
      </p>
    </section>
    <section>
      <h2>Ministry</h2>
      <p>
        A minister at Morningside is any person whom God has called into
        service, regardless of formal education, social status, or experience,
        so all are potential ministers to one another in the Meeting and in the
        world. No minister is paid for being faithful to the will of the Spirit.
      </p>
      <h3>Inner Ministry</h3>
      <p>
        Inner ministry is worship in its many forms that arises from our trust
        that every person, man, woman, or child is capable of direct, unmediated
        experience of the Spirit. The quality of that experience depends on
        preparation and awareness. For this reason Morningside offers:
      </p>
      <ul>
        <li>Support and discernment committees</li>
        <li>Retreats</li>
        <li>Worship sharing on several areas of spiritual development</li>
        <li>Spiritual Nurturance Groups</li>
      </ul>
      <h3>Outer Ministry</h3>
      <p>
        Friends minister to one another as well as those outside the meeting and
        to the Earth itself. Among the more recognizable forms of outer ministry
        are:
      </p>
      <ul>
        <li>
          Service to the meeting through committees—some are committees of the
          whole
        </li>
        <li>Vocal ministry—speaking in meeting</li>
        <li>
          Pastoral ministry—taking care of each other (from individuals to
          support committees)
        </li>
        <li>
          Witness ministry—working in trust to bring peace, justice and love
          into the world
        </li>
      </ul>
    </section>
  </CoreLayout>
);
export default FaithPage;
