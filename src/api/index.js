import db from './firebase';
const resourcesRef = db.collection('resources');
const mockResources = [
	{
		name: 'Delhi Central Hospital',
		contact_person_name: 'Govind Raman',
		details: 'Proper oxygen beds avaiable',
		upvotes: 10,
		downvotes: 3,
		address: {
			building: '13/25',
			city: 'Delhi',
			landmark: 'mandir',
			pincode: '110091',
			state: 'Delhi',
			street: 'dariyaganj'
		},
		phone: ['+91-1234567890', '+91-1234567891'],
		tags: ['OXYGEN', 'HOSPITAL', 'MEDICINE']
	},
	{
		downvotes: 2,
		details: 'Proper oxygen Beds available',
		tags: ['OXYGEN', 'HOSPITAL'],
		'address ': {
			pincode: '226001',
			landmark: 'mandir',
			street: 'dariyaganj',
			state: 'Uttar Pradesh',
			building: '13/225',
			city: 'Lucknow'
		},
		contact_person_name: 'Kishan Kumar',
		name: 'Midland Healthcare',
		phone: ['+91-1234567890', '+91-3216549870'],
		upvotes: 5,
		id: '6ZRXftCRphLW6jGKDRWb'
	}
];

// create
export const addResource = async (resource = mockResources[0]) => {
	try {
		const docRef = await resourcesRef.add(resource);
		if (docRef) {
			return {
				...resource,
				id: docRef.id
			};
		} else return {};
	} catch (err) {
		return { ERR: err.message };
	}
};

// read
// TODO: searchTerm
// TODO: pagination
export const getResources = async (tags = [], searchTerm) => {
	try {
		let modifiedResourcesRef = resourcesRef;
		if (tags.length > 0) {
			modifiedResourcesRef = modifiedResourcesRef.where(
				'tags',
				'array-contains-any',
				tags
			);
		}
		const querySnapshot = await modifiedResourcesRef.get();
		const resources = [];
		querySnapshot.forEach((doc) =>
			resources.push({ ...doc.data(), id: doc.id })
		);
		return resources;
	} catch (err) {
		return {
			ERR: err.message
		};
	}
};
