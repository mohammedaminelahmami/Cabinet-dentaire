<?php
    class ReservationController extends Controller {

        public function __construct()
        {
            $this->ReservationModel = $this->model('Reservation');
        }

        public function rendezVous()
        {
            if(empty($_POST['sujet']) || empty($_POST['date']) || empty($_POST['creneau']))
            {
                echo json_encode("Fields are required !");
            }
            else
            {
                if($this->ReservationModel->insertRendezVous())
                {                    
                    echo json_encode("RendezVous TRUE");
                }else{
                    echo json_encode("RendezVous False");
                }
            }
        }

        public function selectAllCreneau()
        {
            $a = $this->ReservationModel->selectAllCreneau($_POST['date']);
            return $a;
        }

        public function selectAppt()
        {
            $code = $_POST['code'];
            $data = $this->ReservationModel->selectReservation($code);
            echo json_encode($data);
        }

        public function checkAva()
        {
            $datee = $_POST['datee'];
            return $this->ReservationModel->check($datee);
        }

        public function cancelCreneau()
        {
            $idReserve = $_POST['idReserve'];
            return $this->ReservationModel->deleteCreneau($idReserve);
        }

        public function modifierSujet()
        {
            $code = $_POST['code'];
            $idReserve = $_POST['idReserve'];
            $sujet = $_POST['sujet'];
            return $this->ReservationModel->updateSujet($code,$idReserve, $sujet);
        }
    }