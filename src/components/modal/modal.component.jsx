import React, { Component, useEffect, useState, useRef } from "react";
import { Container, Modal, Button, Row, Col, Form } from "react-bootstrap";
import ModalFooter from "./components/modalFooter.component";
import { useHistory } from "react-router-dom";
import { getContacts } from "./modal.service";
import { Scrollbars } from "react-custom-scrollbars";
import { isScrollBarOnBottom } from "../../utils/scrollbar";
import ContactComponent from "./components/contact/contact.component";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useStore, useSelector } from "react-redux";
import { init, fetchNextPage, resetContacts, setQuery } from "./modal.actions";
import ModalC from "../modalC/modalC.component";
import routes from "../../routes";

export default function ModalComponent(props) {
  const history = useHistory();

  const [showEven, setShowEven] = useState(false);

  const scrollbar = useRef(null);
  const dispatch = useDispatch();

  const { contacts, loading, total, query } = useSelector((s) => {
    return s.modal;
  });

  const countryId = props.onlyUS ? 226 : null;

  useEffect(() => {
    dispatch(init(countryId));
  }, []);

  const onClose = () => history.push(routes.home);

  const getFilteredData = (query) => {
    dispatch(setQuery(query));
  };

  const onScrollChange = async (values) => {
    if (contacts.length >= total) return;
    isScrollBarOnBottom(values) && !loading && dispatch(fetchNextPage());
  };

  return (
    <>
      <Modal show={true} size="lg" onHide={onClose} backdrop="static" centered>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>

          <div>
            <DebounceInput
              minLength={1}
              debounceTimeout={500}
              value={query}
              onChange={(e) => getFilteredData(e.target.value)}
            />
          </div>
        </Modal.Header>

        <Modal.Body>
          <Scrollbars
            ref={scrollbar}
            autoHide={false}
            autoHeightMax={500}
            autoHeight={true}
            thumbMinSize={20}
            onUpdate={onScrollChange}
          >
            <div style={{ minHeight: 520 }}>
              {contacts.map(function (contact) {
                return showEven ? (
                  contact.id % 2 == 0 && (
                    <ContactComponent key={contact.id} contact={contact} />
                  )
                ) : (
                  <ContactComponent key={contact.id} contact={contact} />
                );
              })}
            </div>
          </Scrollbars>
        </Modal.Body>

        <Modal.Footer>
          <Container>
            <Row>
              <Col>{loading && <span>Loading...</span>}</Col>
            </Row>
            <Row>
              <Col>
                <ModalFooter
                  onClose={onClose}
                  showEven={showEven}
                  checkShowEven={() => setShowEven(!showEven)}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
      <ModalC />
    </>
  );
}
