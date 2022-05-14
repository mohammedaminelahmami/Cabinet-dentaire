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
            
        }

        // public function insertCreneaux()
        // {
        //     $creneaux = array('9 - 10', '10 - 11', '11 - 12', '14 - 15', '15 - 16', '16 - 17');

        //     for($i = 0; $i < 7; $i++)
        //     {
        //         for($j = 0; $j < count($creneaux); $j++)
        //         {
        //             $d = date('d') + $i;
        //             $date = date('Y-m-'.$d);

        //             if($this->ReservationModel->dateVerif($date))
        //             {
        //                 // Deja exist :)
        //             }else{
        //                 $this->ReservationModel->insertCreneau($creneaux[$j], $date);
        //             }
        //         }
        //     }
        // }
    }