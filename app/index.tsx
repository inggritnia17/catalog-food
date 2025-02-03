import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Linking, FlatList, Alert } from 'react-native';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Coffee, Salad, Phone, Mail, Home, Info, Heart } from 'lucide-react-native';

const products = {
  salads: [
    {
      id: 1,
      name: 'Caesar Salad',
      price: 'Rp. 55.000',
      ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
      Image: require('./image/CaesarSalad.jpg')
    },
    {
      id: 2,
      name: 'Greek Salad',
      price: 'Rp. 64.000',
      ingredients: ['Cucumber', 'Tomatoes', 'Olives', 'Feta', 'Red Onion'],
      Image: require('./image/greeksalad.jpg')
    },
    
  ],
  drinks: [
    {
      id: 3,
      name: 'Green Smoothie',
      price: 'Rp. 43.000',
      ingredients: ['Spinach', 'Banana', 'Apple', 'Almond Milk'],
      Image: require('./image/greensmoothies.jpg')
    },
    {
      id: 4,
      name: 'Berry Blast',
      price: 'Rp. 37.000',
      ingredients: ['Mixed Berries', 'Yogurt', 'Honey', 'Oat Milk'],
      Image: require('./image/berryblast.jpg')
    },
    {
      id: 5,
      name: 'Iced Matcha Latte',
      price: '$Rp. 35.000',
      ingredients: ['Matcha', 'Oat Milk', 'Honey'],
      Image: require('./image/matchalatte.jpg')
    },
  ]
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const ProductCard = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg shadow-lg p-4 m-2"
    >
    <Image
    style={{ 
        width: '100%',
        height: 200,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        }}
        source={require("./image/CaesarSalad.jpg")} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice} numberOfLines={2}>
      {item.price} </Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <View style={styles.tagContainer}>
      {Array.isArray(item.ingredients) && item.ingredients.map((ingredient, index) => (
      <Text key={index} style={styles.tag}>{ingredient}</Text>
       ))}
      </View>
      </motion.div>
  );

  
  const HomePage = () => (
    <ScrollView style={styles.pageContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Text style={styles.heroTitle}>Fresh & Healthy</Text>
        <View style={styles.separator} />
        <Text style={styles.heroSubtitle}>Delicious Salads & Refreshing Drinks</Text>
        <View style={styles.separator} />
          <Text style={styles.sectionTitle}>Featured Items</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[...products.salads, ...products.drinks].slice(0, 4).map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </ScrollView>
      </motion.div>
    </ScrollView>
  );

  const SaladPage = () => (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Our Salads</Text>
      <View style={styles.productsGrid}>
        {products.salads.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );

  const DrinksPage = () => (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Our Drinks</Text>
      <View style={styles.productsGrid}>
        {products.drinks.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );

  const AboutPage = () => (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>About Us</Text>
      <View style={styles.aboutContent}>
        <Text style={styles.aboutText}>
          Welcome to Fresh & Healthy, where we believe in serving the freshest and most nutritious salads and drinks. 
          Our commitment to quality ingredients and innovative recipes sets us apart.
        </Text>
        <View style={styles.valueProps}>
          <View style={styles.valueProp}>
            <Text style={styles.valuePropTitle}>Fresh Ingredients</Text>
            <Text style={styles.valuePropText}>We source only the freshest ingredients from local farmers.</Text>
          </View>
          <View style={styles.valueProp}>
            <Text style={styles.valuePropTitle}>Healthy Options</Text>
            <Text style={styles.valuePropText}>All our menu items are carefully crafted to provide maximum nutrition.</Text>
          </View>
          <View style={styles.valueProp}>
            <Text style={styles.valuePropTitle}>Eco-Friendly</Text>
            <Text style={styles.valuePropText}>We use sustainable packaging and practice responsible waste management.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const ContactPage = () => (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Contact Us</Text>
      <View style={styles.contactContent}>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => Linking.openURL('tel:+6285373050530')}
        >
          <Phone size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => Linking.openURL('mailto:inggritnia@gmail.com')}
        >
          <Mail size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Email Us</Text>
        </TouchableOpacity>
        <View style={styles.contactInfo}>
          <Text style={styles.contactInfoText}>Gatot Subroto Street</Text>
          <Text style={styles.contactInfoText}>Medan 12345</Text>
          <Text style={styles.contactInfoText}>Open Daily: 8AM - 8PM</Text>
        </View>
      </View>
    </ScrollView>
  );

  const Navigation = () => (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={() => setCurrentPage('home')}>
        <Home size={30} color={currentPage === 'home' ? '#4CAF50' : '#666'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentPage('salads')}>
        <Salad size={30} color={currentPage === 'salads' ? '#4CAF50' : '#666'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentPage('drinks')}>
        <Coffee size={30} color={currentPage === 'drinks' ? '#4CAF50' : '#666'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentPage('about')}>
        <Info size={30} color={currentPage === 'about' ? '#4CAF50' : '#666'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentPage('contact')}>
        <Phone size={30} color={currentPage === 'contact' ? '#4CAF50' : '#666'} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'salads' && <SaladPage />}
        {currentPage === 'drinks' && <DrinksPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </AnimatePresence>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  pageContainer: {
    flex: 1, 
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f8'
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2E7D32',
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginTop: 80,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  productPrice: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 12,
    color: '#2E7D32',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  aboutContent: {
    padding: 20,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 30,
  },
  valueProps: {
    marginTop: 20,
  },
  valueProp: {
    marginBottom: 20,
  },
  valuePropTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  valuePropText: {
    fontSize: 14,
    color: '#666',
  },
  contactContent: {
    padding: 20,
    alignItems: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    justifyContent: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  contactInfo: {
    marginTop: 30,
    alignItems: 'center',
  },
  contactInfoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  productsGrid: {
    padding: 8
  },
  tombol: { 
    backgroundColor: "blue",
    padding: 10,
    width: 100,
    color: "white",
    borderRadius: 5,
    textAlign: "center"
  },
  separator: {
    width: 200, // Lebar garis pemisah
    height: 2, // Tinggi garis pemisah
    backgroundColor: '#4b5563', // Warna garis pemisah (abu-abu)
    marginVertical: 12, // Jarak vertikal di antara title dan subTitle
  },
});

export default App;


