import React from 'react';

import { Card, Col, Row } from 'antd';

function Schedule() {
    const boardStyles = {
        borderRight: '2px solid rgb(200, 14, 14, 0.5)',
        borderTop: '2px solid rgb(200, 14, 14, 0.5)',
        height: 320, width: 300,
    };
    return (
        <>

            <div style={{margin: "125px" }}>
                <h3 className="title">F1 Schedule 2023</h3>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                              bordered={false}
                              style={boardStyles}
                              cover={<img alt="example"
                                          src={require("assets/img/F1/r5.jpg")}
                                          style={{height: 316, width: 300 }}
                              />}
                        >
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            style={boardStyles}
                            cover={<img alt="example"
                                        src={require("assets/img/F1/r6.jpg")}
                                        style={{height: 316, width: 300 }}
                            />}
                        >
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            style={boardStyles}
                            cover={<img alt="example"
                                        src={require("assets/img/F1/r7.jpg")}
                                        style={{height: 316, width: 300 }}
                            />}
                        >
                        </Card>
                    </Col>
                </Row>
            </div>


        </>
        )

}

export default Schedule;