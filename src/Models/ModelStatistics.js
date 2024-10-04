import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './ModelStatistics.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ModelStatistics = ({ show, handleClose }) => {
  const [year, setYear] = useState('2023');

  const dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: `Monthly Rented Rooms - ${year}`,
        backgroundColor: "#0069b4b3",
        borderColor: "#0069b4",
        borderWidth: 1,
        hoverBackgroundColor: "#0069b447",
        hoverBorderColor: "#0069b4",
        data: [85, 105, 59, 100, 118, 35, 40, 67, 81, 56, 55, 40]
      }
    ]
  };

  const dataPie = {
    labels: ["Occupied Rooms", "Vacant Rooms"],
    datasets: [
      {
        data: [300, 100],
        backgroundColor: ["#0069b4", "#d3d3d3"],
        hoverBackgroundColor: ["#005bb5", "#c0c0c0"]
      }
    ]
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Statistics</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="mb-4">
            <Col>
              <h3>Yearly Statistics</h3>
              <select value={year} onChange={handleYearChange} className="year-selector">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}>
              <Bar data={dataBar} options={{ maintainAspectRatio: false }} />
            </Col>
            <Col md={6}>
              <Pie data={dataPie} options={{ maintainAspectRatio: false }} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelStatistics;
