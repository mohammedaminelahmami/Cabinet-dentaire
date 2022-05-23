<?php
    class User {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        public function insertUser($code, $nom, $prenom, $email, $age)
        {
            // date_default_timezone_set('Africa/Casablanca');
            // $date = date('Y-m-d H:i:s', time());
            // $time = strtotime($date);

            $this->db->query("INSERT INTO cabinet_dentaire . user (code, nom, prenom, email, age)
                              VALUES (:code, :nom, :prenom, :email, :age)");
            // Bind values
            $this->db->bind(':code', md5($code));
            $this->db->bind(':nom', $nom);
            $this->db->bind(':prenom', $prenom);
            $this->db->bind(':email', $email);
            $this->db->bind(':age', $age);

            if($this->db->execute()) 
            {
                return $code;
            }
        }

        // public function selectUser()
        // {
        //     $this->db->query("SELECT code FROM cabinet_dentaire . user");
        //     return $this->db->single();
        // }

        public function validateCode($codeField)
        {
            $codeField = md5($codeField);
            $this->db->query("SELECT * FROM cabinet_dentaire . user WHERE code = '$codeField' ");

            if($this->db->single())
            {
                echo json_encode('True');
            }else{
                echo json_encode('False');
            }
        }
    }