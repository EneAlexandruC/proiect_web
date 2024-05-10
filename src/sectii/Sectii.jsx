import React from "react";
import { Container, ListGroup, Row, Col, Tab } from "react-bootstrap";

export default function Sectii() {
  return (
    <div
      className="tab-container-wrapper "
      style={{ animation: "fadeIn 1s ease-in-out" }}
    >
      <Tab.Container defaultActiveKey={"#l1"}>
        <Row className="justify-content-center">
          <h1
            className="custom-font"
            style={{ animation: "fadeIn 1s ease-in-out", marginTop: "5rem" }}
          >
            <p style={{ fontSize: "4rem" }}>
              Iata cateva facilitati pe care le punem la dispozitie
            </p>
          </h1>
        </Row>
        <Row style={{ padding: "9rem" }}>
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item
                action
                href="#l1"
                className="custom-list-item border-0"
              >
                <p>Fotbal pentru copii si adulti</p>
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="#l2"
                className="custom-list-item border-0"
              >
                <p>Baschet pentru copii si adulti</p>
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="#l3"
                className="custom-list-item border-0"
              >
                <p>Antrenamente de fitness si culturism</p>
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="#l4"
                className="custom-list-item border-0"
              >
                <p>Alergare si jogging in aer liber</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col style={{ paddingLeft: "5rem" }}>
            <Tab.Content>
              <Tab.Pane eventKey="#l1">
                <h5>
                  <b>Pentru copii:</b>
                </h5>
                <p>
                  Antrenorii nostri specializati in fotbal pentru copii creeaza
                  un mediu distractiv si sigur in care micutii pot invata
                  regulile jocului, tehnici de baza si strategii de echipa. Prin
                  antrenamente interactive si sesiuni practice, copiii nostri
                  invata nu doar abilitati sportive, ci si valori precum
                  fair-play-ul, respectul si colaborarea.
                </p>
                <br />
                <h5>
                  <b>Pentru adulti:</b>
                </h5>
                <p>
                  Fotbalul pentru adulti ofera oportunitatea de a va mentine in
                  forma, de a va dezvolta abilitatile fotbalistice si de a va
                  bucura de competitie intr-un mediu prietenos si motivant.
                  Indiferent daca sunteti un jucator experimentat sau incepator,
                  veti gasi un loc in echipa noastra. Prin antrenamente regulate
                  si meciuri amicale sau competitii locale, va ajutam sa va
                  atingeti obiectivele sportive si sa va bucurati de pasiunea
                  pentru fotbal.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#l2">
                <h5>
                  <b>Pentru copii:</b>
                </h5>
                <p>
                  Programul nostru de baschet pentru copii isi propune sa ofere
                  o introducere distractiva si educativa in lumea baschetului.
                  Antrenorii nostri calificati lucreaza indeaproape cu copiii
                  pentru a le invata tehnicile de baza ale baschetului, cum ar
                  fi driblingul, aruncarile la cos si trecerile, in timp ce
                  promoveaza valori precum fair-play-ul, cooperarea si respectul
                  fata de ceilalti jucatori si antrenori.
                </p>
                <br />
                <h5>
                  <b>Pentru adulti:</b>
                </h5>
                <p>
                  Programul de baschet pentru adulti este conceput pentru a
                  oferi oportunitati de antrenament si competitie pentru toti
                  cei care iubesc baschetul. Indiferent daca sunteti un jucator
                  experimentat sau un incepator, va invitam sa va alaturati
                  echipei noastre. Prin antrenamente concentrate si meciuri
                  amicale sau competitii locale, va ajutam sa va imbunatatiti
                  abilitatile, sa va mentineti in forma si sa va bucurati de
                  pasiunea pentru baschet.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#l3">
                <h5>
                  <b>Pentru incepatori:</b>
                </h5>
                <p>
                  Pentru cei care sunt la inceput de drum in lumea fitnessului
                  si culturismului, oferim programe special concepute pentru a
                  va ajuta sa va construiti o baza solida. Antrenorii nostri
                  experimentati va vor ghida pas cu pas prin exercitii de baza
                  si tehnici corecte de antrenament, adaptate nevoilor si
                  capacitatilor dumneavoastra individuale.
                </p>
                <br />
                <h5>
                  <b>Pentru avansati:</b>
                </h5>
                <p>
                  Pentru cei care doresc sa-si imbunatateasca performanta si
                  sa-si maximizeze rezultatele, oferim programe avansate de
                  fitness si culturism. Antrenorii nostri specializati vor crea
                  programe personalizate, adaptate obiectivelor si nivelului
                  dumneavoastra de fitness. Va vom ajuta sa va atingeti
                  potentialul maxim, sa va construiti masa musculara, sa va
                  sculptati corpul si sa va imbunatatiti conditia fizica
                  generala.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#l4">
                <h5>
                  <b>Pentru toate nivelurile de fitness:</b>
                </h5>
                <p>
                  Indiferent daca sunteti un alergator incepator sau
                  experimentat, veti gasi un program potrivit pentru
                  dumneavoastra. Antrenorii nostri specializati vor crea
                  antrenamente personalizate, adaptate nivelului dumneavoastra
                  de fitness si obiectivelor dumneavoastra individuale.
                </p>
                <br />
                <h5>
                  <b>Alergare in grup:</b>
                </h5>
                <p>
                  Participarea la alergarile de grup este o modalitate minunata
                  de a va mentine motivatia si de a va bucura de suportul si
                  incurajarea altor alergatori. Alergarea in grup va ofera, de
                  asemenea, ocazia de a va conecta cu alti membri ai comunitatii
                  noastre si de a va impartasi pasiunea pentru alergare.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
