import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3030/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      // Envoyer la requête DELETE à l'URL de l'utilisateur spécifié
      await axios.delete(`http://localhost:3030/users/${userId}`);
      // Mettre à jour la liste des utilisateurs en filtrant l'utilisateur supprimé
      setUsers(users.filter(user => user.id !== userId));
      alert('Utilisateur supprimé avec succès.');
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur :", error);
      alert('Erreur lors de la suppression de l\'utilisateur. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Nom:</strong> {user.nom}, <strong>Prénom:</strong> {user.prenom}, <strong>Email:</strong> {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowUser;
