import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Dropdown, ButtonToolbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSnippets } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import routes from '../routes.js';

import { actions as modalActions } from '../slices/modalSlice.js';
import { actions as snippetsActions } from '../slices/snippetsSlice.js';

import classes from './Profile.module.css';

export function Profile() {
  const { t } = useTranslation();
  const [userdata, setUserdata] = useState([]);
  const snippetApi = useSnippets();
  const dispatch = useDispatch();
  const snippets = useSelector((state) => state.snippets.snippets);

  const parseDate = (date) => {
    try {
      return new Intl.DateTimeFormat().format(new Date(date));
    } catch {
      return t('profile.succesfulLoading');
    }
  };

  const handleSnippetDelete = async (id) => {
    await snippetApi.deleteSnippet(id);
    dispatch(snippetsActions.deleteSnippet(id));
  };

  const handleSnippetRename = (id, name, code) => {
    dispatch(
      modalActions.openModal({
        type: 'renameRepl',
        item: { id, name, code },
      }),
    );
  };

  useEffect(() => {
    const fetchUserSnippets = async () => {
      const response = await axios.get(routes.userProfilePath());
      setUserdata(response.data.currentUser);
      dispatch(snippetsActions.addSnippets(response.data.snippets));
    };
    fetchUserSnippets();
  }, []);

  return (
    <div className="main-content">
      <div className={`${classes.upperLine}`}></div>
      <div className={`h-100 w-100 px-3 bg-dark ${classes.container}`}>
        <Row className={`${classes.profileContainer}`}>
          <Col className={`col-md-3 px-2 rounded ${classes.profileColumn}`}>
            <div className={`w-100 ${classes.profile}`}>
              <div>
                <h1 className="my-2">{userdata.login}</h1>
                <div>
                  {`${t('profile.email')} `}
                  <span className="text-muted">{userdata.email}</span>
                </div>
                {/* "userdata.created_at", "userdata.id" are also available. Add if needed. */}
              </div>
              <div className={`${classes.profileButtons}`}>
                <Button className={`${classes.button}`}>
                  <div>
                    <span>{t('profile.editProfileButton')}</span>
                  </div>
                  {/* TODO: add edit tool */}
                </Button>
                <Button className={`${classes.button}`}>
                  <div>
                    <span>{t('profile.copyProfileButton')} </span>
                  </div>
                  {/* TODO: add ability to copy user profile link */}
                </Button>
              </div>
              <div className="gap" style={{ marginBottom: 'auto' }}></div>
              <div
                className="d-flex flex-md-column w-100"
                style={{ alignItems: 'center' }}
              >
                <span>{t('profile.createdAt')}</span>
                <span>{parseDate(userdata.created_at)}</span>
              </div>
            </div>
          </Col>
          <Col className={`rounded w-100 ${classes.replsCol}`}>
            <div
              className={`w-100 h-100 d-flex flex-column ${classes.repls}`}
              style={{ paddingTop: '30px' }}
            >
              <Row
                className="my-2 flex-md-row"
                style={{ borderBottom: '1px solid #293746' }}
              >
                <div className="d-flex justify-content-between align-items-center flex-md-row w-100">
                  <h2>{t('profile.replsHeader')}</h2>
                  <div className={`${classes.newRepl}`}>
                    <Button
                      className={`${classes.newReplButton}`}
                      onClick={() =>
                        dispatch(modalActions.openModal({ type: 'genNewRepl' }))
                      }
                    >
                      {t('profile.newReplButton')}
                    </Button>
                  </div>
                </div>
              </Row>
              <Row xs={1} md={2} className="g-4 my-1">
                {snippets.map(({ id, name, code }) => (
                  <Col xs lg="3" key={id}>
                    <Card style={{ border: 0 }}>
                      <Card.Header className={`${classes.snippetHeader}`}>
                        {name}
                      </Card.Header>
                      <Card.Body className={`${classes.snippetBody}`}>
                        <Card.Text>
                          {/* TODO: add a screenshot for snippet */}
                        </Card.Text>
                          <ButtonToolbar className="justify-content-center">
                            
                            <Button
                              className={`ms-2 ${classes.button}`}
                              variant="primary"
                              href={snippetApi.genSnippetLink(
                                snippetApi.encodeId(id),
                              )}
                            >
                              {t('profile.openReplButton')}
                            </Button>
                            <Button
                              className={`ms-2 ${classes.button}`}
                              variant="primary"
                              onClick={() =>
                                dispatch(
                                  modalActions.openModal({
                                    type: 'sharingRepl',
                                    item: {
                                      name,
                                      link: snippetApi.genSnippetLink(
                                        snippetApi.encodeId(id),
                                      ),
                                    },
                                  }),
                                )
                              }
                            >
                              {t('profile.shareReplButton')}
                            </Button>
                            <Dropdown
                              className={`mt-1 ms-2 ${classes.snippetTools}`}
                              id="snippet"
                            >
                              <Dropdown.Toggle
                                aria-expanded="false"
                                className={`flex-grow-0  dropdown-toggle-split ${classes.dropdown}`}
                              >
                                <span className="visually-hidden">
                                  {t('profile.editSnippet')}
                                </span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                className={`${classes.dropdownMenu}`}
                              >
                                <Dropdown.Item
                                  className={`${classes.dropdownItem}`}
                                  onClick={() =>
                                    handleSnippetRename(id, name, code)
                                  }
                                >
                                  {t('profile.renameReplButton')}
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className={`${classes.dropdownItem}`}
                                  onClick={() => handleSnippetDelete(id)}
                                >
                                  {t('profile.deleteReplButton')}
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </ButtonToolbar>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
