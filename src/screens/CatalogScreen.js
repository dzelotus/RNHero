import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const CatalogScreen = (props) => {
	const { navigation } = props;

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios
			.get('https://random-data-api.com/api/restaurant/random_restaurant?size=20')
			.then((response) => {
				console.log('RESPONSE', response.data);
				setData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log('ERROR', error);
			});
	};

	if (loading) {
		return <ActivityIndicator size="large" color="green" />;
	}
	return (
		<View style={{ backgroundColor: 'white', flex: 1 }}>
			<Text>CATALOG SCREEN</Text>
			<FlatList
				data={data}
				renderItem={(item) => {
					console.log('ITEM', item);
					return (
						<View>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									navigation.navigate('PlantsScreen', { data: item.item });
								}}
							>
								<Text>{item.item.name}</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		marginHorizontal: 5,
		marginVertical: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderRadius: 10,
		borderColor: '#379683',
		borderWidth: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default CatalogScreen;
