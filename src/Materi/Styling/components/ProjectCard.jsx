import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class ProjectCard extends Component {
  render() {
    const { projectImage, projectName, projectDesc } = this.props;
    return (
      <div className="col-md-6">
        <Card className='h-100 shadow'>
          <Card.Img variant='top' src={projectImage} />
          <Card.Body className='p-5'>
            <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>{projectName}</Card.Title>
            <Card.Text>{projectDesc}</Card.Text>
            <Button className='shadow' variant='outline-primary'>View project</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

