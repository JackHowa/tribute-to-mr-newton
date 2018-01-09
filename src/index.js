import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {
  PageHeader,
  Jumbotron,
  Button,
  Image,
  Col,
  Grid,
  Row,
  Well,
  Panel
} from "react-bootstrap";

// main app for rendering to dom
class Base extends React.Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <Row>
            <Header />
            <Main />
            <Article />
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <PageHeader className="primary-green">
          Mr. Newton <small>The man who trained thousands</small>
        </PageHeader>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <Col md={6} sm={6}>
        <Image
          src="https://pbs.twimg.com/media/DQpuEelXkAAPjqU.jpg"
          rounded
          responsive
        />
      </Col>
    );
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>
        <Col sm={6} md={6}>
          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">My favorite quotes</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <blockquote>
                It's nice to be great. But it's far greater to be nice.
              </blockquote>
              <blockquote>
                However fast your are running - run faster!
              </blockquote>
            </Panel.Body>
            <Panel.Footer>
              <Button
                href="https://www.runnersworld.com/obituary/legendary-cross-country-coach-joe-newton-dies-at-88"
                target="_blank"
                bsStyle="link"
              >
                Read more about his life
              </Button>
            </Panel.Footer>
          </Panel>
        </Col>
      </div>
    );
  }
}

ReactDOM.render(
  // Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components, for the props)
  <Base />,
  document.getElementById("root")
);
