import React from "react";
import SButton from "../Button";
import SelectBox from "../selectBox";
import { Col, Form, Row } from "react-bootstrap";

function CreateKonsultasiInput() {
  return (
    <Form method="post" className="form-create-wo">
      <Row className="mt-4 mb-4">
        <Col className="ms-3">
          <Form.Label>Nama</Form.Label>
          <Form.Control name="name" type="text" disabled readOnly />
        </Col>

        <Col className="me-3">
          <SelectBox
            label={"Pilih Pakar IT"}
            name="development"
            isClearable={true}
          />
        </Col>
      </Row>

      <Row className="mt-4 mb-4">
        <Col className="ms-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="name" type="text" disabled readOnly />
        </Col>

        <Col className="me-3">
          <SelectBox
            label={"Durasi Obrolan"}
            name="development"
            isClearable={true}
          />
        </Col>
      </Row>

      <Form.Group className="mb-3 ms-3 me-3">
        <Form.Label>Keterangan</Form.Label>
        <Form.Control
          id="permasalahan"
          as="textarea"
          name="permasalahan"
          rows={3}
        />
      </Form.Group>

      <div className="m-auto mt-3 mb-3" style={{ width: "25%" }}>
        <SButton className="w-100" variant="danger">
          Submit
        </SButton>
      </div>
    </Form>
  );
}

export default CreateKonsultasiInput;
