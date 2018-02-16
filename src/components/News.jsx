import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
              <p>Sometimes you learn more from your mistakes than you do from your masterpieces. Here's something that's fun. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. These trees are so much fun. I get started on them and I have a hard time stopping.</p>
              <p>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. The light is your friend. Preserve it. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet.</p>
              <p>Anyone can paint. This is the way you take out your flustrations. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so.</p>
              <p>Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things Let's make some happy little clouds in our world. This is a happy place, little squirrels live here and play. We'll do another happy little painting. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. We might as well make some Almighty mountains today as well, what the heck.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
