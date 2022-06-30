import React from "react";
import { View } from "react-native";
import Title from "./Title";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Title />
            </View>
        )
    }
}
