import { Typography } from 'antd';
import { Col, Row } from 'antd';
import React from 'react'
import Settings from './components/Settings';

type SearchProps = {

}

const Search: React.FC<SearchProps> = (props) => 
{
    return (
        <section className="section container">
            <Row justify="end" style={{padding:20}}>
                <Col><Settings logout={()=>{}}/></Col>
            </Row>
            <Row justify="center" style={{ marginTop:100 }}>
                <Col>
                    <Typography.Title>Who is in charge of this work?</Typography.Title>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop:50 }}>
                <Col span={12}>
                    <input type="text"/>
                </Col>
            </Row>
        </section>
    );
}

export default Search;
