import React from 'react';

import Button from "@stimetable.css/react/build/components/general/Button";
import Text from "@stimetable.css/react/build/components/general/Text";
import * as Form from "@stimetable.css/react/build/components/form/Form";

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
                </Form.default>
            </div>
        </div>
    );
}

