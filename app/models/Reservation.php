<?php
// ba9ili loop 3la les creneaux kol maybda osbo3 jdid
    class Reservation {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        public function selectReservation($code)
        {
            $this->db->query("SELECT * FROM cabinet_dentaire . reservation WHERE code = '$code' ");
            return $this->db->resultSet();
        }

        public function selectAllCreneau($date)
        {
            $this->db->query("SELECT creneau FROM cabinet_dentaire . reservation WHERE date = '$date'");
            echo json_encode($this->db->resultSet());
        }

        public function insertRendezVous()
        {
            $code = htmlspecialchars($_POST['code']);
            $sujet = htmlspecialchars($_POST['sujet']);
            $date = htmlspecialchars($_POST['date']);
            $creneau = htmlspecialchars($_POST['creneau']);

            $this->db->query("INSERT INTO cabinet_dentaire . reservation (code, sujet, date, creneau)
                              VALUES (:code, :sujet, :date, :creneau)");
            // Bind values
            $this->db->bind(':code', $code);
            $this->db->bind(':sujet', $sujet);
            $this->db->bind(':date', $date);
            $this->db->bind(':creneau', $creneau);

            return $this->db->execute();
        }

        public function check($datee)
        {
            $this->db->query("SELECT creneau FROM cabinet_dentaire . reservation WHERE date = '$datee' ");
            if($this->db->resultSet())
            {
                echo json_encode($this->db->resultSet());
            }else{
                return false;
            }
        }
        
        // public function insertCreneau($creneau, $date)
        // {
        //     $this->db->query("INSERT INTO cabinet_dentaire . creneau (creneau, date) VALUES (:creneau, :date)");

        //     // Bind values
        //     $this->db->bind(':creneau', $creneau);
        //     $this->db->bind(':date', $date);

        //     return $this->db->execute();
        // }

        // public function dateVerif($date)
        // {
        //     $this->db->query("SELECT * FROM cabinet_dentaire . creneau WHERE date = '$date' ");
        //     if($this->db->single())
        //     {
        //         return true;
        //     }else{
        //         return false;
        //     }        
        // }

    }