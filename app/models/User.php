<?php
    class User {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        public function insertUser()
        {
            $code = rand();
            $nom = htmlspecialchars($_POST['nom']);
            $prenom = htmlspecialchars($_POST['prenom']);
            $email = htmlspecialchars($_POST['email']);
            $age = htmlspecialchars($_POST['age']);

            $this->db->query("INSERT INTO cabinet_dentaire . user (code, nom, prenom, email, age)
                              VALUES (:code, :nom, :prenom, :email, :age)");
            // Bind values
            $this->db->bind(':code', $code);
            $this->db->bind(':nom', $nom);
            $this->db->bind(':prenom', $prenom);
            $this->db->bind(':email', $email);
            $this->db->bind(':age', $age);

            return $this->db->execute();
        }

        public function selectUser()
        {
            $this->db->query("SELECT code FROM cabinet_dentaire . user");
            return $this->db->single();
        }

        public function validateCode($codeField)
        {
            $this->db->query("SELECT * FROM cabinet_dentaire . user WHERE code = '$codeField' ");            
            if($this->db->single())
            {
                echo json_encode('True');
            }else{
                echo json_encode('False');
            }
        }

    }