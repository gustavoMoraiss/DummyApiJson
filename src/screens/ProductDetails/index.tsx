import React from "react"
import { SafeAreaView, Text } from "react-native"
import styles from "./style"

const ProductDetails = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>ProductDetails</Text>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails)