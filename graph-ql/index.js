import { gql, ApolloServer } from "apollo-server";
const persons = [
  {
    name: "John",
    phone: "1234567890",
    street: "Main Street",
    city: "New York",
    id: 1,
  },
  {
    name: "Jane",
    phone: "0987654321",
    street: "Broadway",
    city: "Los Angeles",
    id: 2,
  },
  {
    name: "Jake",
    phone: "1231231234",
    street: "Oak Avenue",
    city: "Chicago",
    id: 3,
  },
  {
    name: "Jill",
    phone: "4564564567",
    street: "Elm Street",
    city: "Houston",
    id: 4,
  },
  {
    name: "Jack",
    phone: "7897897890",
    street: "First Street",
    city: "Philadelphia",
    id: 5,
  },
  {
    name: "Joe",
    phone: "1212121212",
    street: "Second Street",
    city: "Phoenix",
    id: 6,
  },
  {
    name: "Jenny",
    phone: "3434343434",
    street: "Third Street",
    city: "San Antonio",
    id: 7,
  },
  {
    name: "Josh",
    phone: "5656565656",
    street: "Fourth Street",
    city: "San Diego",
    id: 8,
  },
  {
    name: "Jared",
    phone: "7878787878",
    street: "Fifth Street",
    city: "Dallas",
    id: 9,
  },
  {
    name: "Julia",
    phone: "9090909090",
    street: "Sixth Street",
    city: "San Jose",
    id: 10,
  },
  {
    name: "John",
    phone: "1010101010",
    street: "Seventh Street",
    city: "Austin",
    id: 11,
  },
  {
    name: "Janet",
    phone: "1213141516",
    street: "Eighth Street",
    city: "Jacksonville",
    id: 12,
  },
  {
    name: "Jenna",
    phone: "1718192020",
    street: "Ninth Street",
    city: "San Francisco",
    id: 13,
  },
  {
    name: "Jim",
    phone: "2122232425",
    street: "Tenth Street",
    city: "Columbus",
    id: 14,
  },
  {
    name: "Justin",
    phone: "2627282930",
    street: "Eleventh Street",
    city: "Indianapolis",
    id: 15,
  },
  {
    name: "Jeff",
    phone: "3132333435",
    street: "Twelfth Street",
    city: "Fort Worth",
    id: 16,
  },
  {
    name: "Jasmine",
    phone: "3637383940",
    street: "Thirteenth Street",
    city: "Charlotte",
    id: 17,
  },
  {
    name: "John",
    phone: "4142434445",
    street: "Fourteenth Street",
    city: "Seattle",
    id: 18,
  },
  {
    name: "Jill",
    phone: "4647484950",
    street: "Fifteenth Street",
    city: "Denver",
    id: 19,
  },
  {
    name: "Jake",
    phone: "5152535455",
    street: "Sixteenth Street",
    city: "Boston",
    id: 20,
  },
];

const typeDefs = gql`
  type Address {
    street: String!
    city: String!
  }
  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }
  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) => {
      const { name } = args;
      return persons.find((person) => person.name === name);
    },
  },
  Person: {
    address: (root) => {
      return {
        street: root.street,
        city: root.city,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
