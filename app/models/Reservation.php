<?php
    class Reservation {
        private $db;

        public function __construct()
        {
            $this->db = new Database;
        }

        public function selectReservation($code)
        {
            $code = md5($code);
            $this->db->query("SELECT * FROM cabinet_dentaire . reservation
                              WHERE code = '$code'
                            ");
            return $this->db->resultSet();
        }

        public function selectAllCreneau($date)
        {
            $this->db->query("SELECT creneau FROM cabinet_dentaire . reservation
                              WHERE date = '$date'
                            ");
            echo json_encode($this->db->resultSet());
        }

        public function insertRendezVous($code, $sujet, $date, $creneau)
        {
            $code = md5($code);

            $this->db->query("INSERT INTO cabinet_dentaire . reservation (code, sujet, date, creneau)
                              VALUES (:code, :sujet, :date, :creneau)
                            ");
            // Bind values
            $this->db->bind(':code', $code);
            $this->db->bind(':sujet', $sujet);
            $this->db->bind(':date', $date);
            $this->db->bind(':creneau', $creneau);

            return $this->db->execute();
        }

        public function check($datee)
        {
            $this->db->query("SELECT creneau FROM cabinet_dentaire . reservation
                              WHERE date = '$datee'
                            ");
            if($this->db->resultSet())
            {
                echo json_encode($this->db->resultSet());
            }else{
                return false;
            }
        }

        public function deleteCreneau($idReserve)
        {
            $this->db->query("DELETE FROM reservation
                              WHERE idReserve = '$idReserve'
                            ");
            return $this->db->execute();
        }

        public function updateSujet($code, $idReserve, $sujet)
        {
            $code = md5($code);
            $this->db->query("UPDATE reservation
                              SET sujet = '$sujet'
                              WHERE code = '$code'
                              AND idReserve = '$idReserve'
                            ");
            return $this->db->execute();
        }

        // public function UpdateCreneau($idReserve)
        // {
        //     $this->db->query("UPDATE reservation
        //                       SET cancel = 1
        //                       WHERE idReserve = '$idReserve'
        //                     ");
        //     return $this->db->execute();
        // }
    }