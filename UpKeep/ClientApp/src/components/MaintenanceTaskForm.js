import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './MaintenanceTaskForm.css';

const MaintenanceTaskForm = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [completedDate, setCompletedDate] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add code to handle form submission here
    }

    return (
        <Form onSubmit={handleSubmit} className="maintenance-form">
            <Form.Group controlId="formRoomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter room number"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formTask">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} className="mb-3" />
            </Form.Group>
                <Form.Group controlId="formPriority" className="radio-group">
                <Form.Label style={{ marginRight: '10px' }}>Priority:</Form.Label>
                <Form.Check inline type="radio" label="Low" name="priority" value="low" checked={priority === "low"} onChange={(e) => setPriority(e.target.value)} />
                <Form.Check inline type="radio" label="Medium" name="priority" value="medium" checked={priority === "medium"} onChange={(e) => setPriority(e.target.value)} />
                <Form.Check inline type="radio" label="High" name="priority" value="high" checked={priority === "high"} onChange={(e) => setPriority(e.target.value)} />
                </Form.Group>
            <Form.Group controlId="formStatus" className="radio-group">
                <Form.Label style={{ marginRight: '10px' }}>Status:</Form.Label>
                <Form.Check inline type="radio" label="Open" name="status" value="open" checked={status === "open"} onChange={(e) => setStatus(e.target.value)} />
                <Form.Check inline type="radio" label="In Progress" name="status" value="in-progress" checked={status === "in-progress"} onChange={(e) => setStatus(e.target.value)} />
                <Form.Check inline type="radio" label="Closed" name="status" value="closed" checked={status === "closed"} onChange={(e) => setStatus(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-due-date" />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description/Comments</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} className="mb-3" />
            </Form.Group>
            <Button variant="primary" type="submit" className="form-submit-button">
                Submit
      </Button>
        </Form>
    );
}

export default MaintenanceTaskForm;

