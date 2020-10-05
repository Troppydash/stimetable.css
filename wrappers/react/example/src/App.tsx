import React from 'react';

import Button from "@stimetable.css/react/lib/components/Button";
import Text from "@stimetable.css/react/lib/components/Text";
import * as Form from "@stimetable.css/react/lib/components/Form";
import Select, { Option } from "@stimetable.css/react/lib/components/Select";

export default function App() {
    const [ text, setText ] = React.useState( 'Hello World' );
    return (
        <div>
            <div>
                <Button>Hello World</Button>
                <Button primary>{text}</Button>
                <Button secondary onClick={() => setText( 'Hello Me' )}>Hello World</Button>
            </div>
            <div>
                <Button small>Small</Button>
                <Button medium>Medium</Button>
                <Button big>Big</Button>
            </div>

            <div>
                <Text>Hello World</Text>
                <Text primary>Hello World</Text>
                <Text secondary>Hello World</Text>
            </div>
            <div>
                <Text small>Small</Text>
                <Text medium>Medium</Text>
                <Text big>Big</Text>
            </div>
            <div>
                <Text inline>{text}</Text>
                <Text primary inline>Hello World</Text>
                <Text inline secondary onClick={() => alert( 'hi' )}>Hello World</Text>
            </div>
            <div>
                <Text scaling={10}>Smallest</Text>
                <Text scaling={50}>Hello</Text>
                <Text scaling={100}>Hello</Text>
                <Text scaling={150}>Hello</Text>
                <Text scaling={200}>Hello</Text>
                <Text scaling={250}>Hello</Text>
                <Text scaling={300}>Hello</Text>
                <Text scaling={350}>Hello</Text>
                <Text scaling={400}>Biggest</Text>
            </div>

            <div>
                <Text>{text}</Text>
                <Select value={text} onChange={(e) => { setText(e.currentTarget.value)}}>
                    <Option>Hello World</Option>
                    <Option>yes</Option>
                    <Option>no</Option>
                </Select>
            </div>

            <div>
                <Form.default>
                    <Form.Control small>
                        <Form.Label name="OneLiner" small>
                            <Form.Input placeholder="Hello World" small />
                        </Form.Label>
                    </Form.Control>
                    <Form.Control big>
                        <Form.Label name="Multi" multi big>
                            <Form.Input placeholder="Hello World" big />
                        </Form.Label>
                    </Form.Control>

                    <Form.Control>
                        <Form.Label name="Settings" settings>
                            <Form.Input placeholder="Hello World"/>
                        </Form.Label>
                    </Form.Control>

                    <Form.Control>
                        <Form.Label name="Settings" settings>
                            <Form.Select>
                                <Form.Option>Yes</Form.Option>
                                <Form.Option>No</Form.Option>
                            </Form.Select>
                        </Form.Label>
                        <Form.Label name="Settings" settings>
                            <Form.Select primary small>
                                <Form.Option>Yes</Form.Option>
                                <Form.Option>No</Form.Option>
                            </Form.Select>
                        </Form.Label>
                        <Form.Label name="Settings" settings>
                            <Form.Select secondary big>
                                <Form.Option>Yes</Form.Option>
                                <Form.Option>No</Form.Option>
                            </Form.Select>
                        </Form.Label>
                    </Form.Control>
                    <Form.Control>
                        <Form.Submit primary>Submit</Form.Submit>
                    </Form.Control>
                </Form.default>
            </div>
        </div>
    );
}

