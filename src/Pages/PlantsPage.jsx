import React, { useEffect } from "react";
import Plants from "../Component/Plants";
import { useParams } from "react-router-dom";
import { createPayment } from "../service/oprations/PaymentApi";
import { verifyPayment } from "../service/oprations/PaymentApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// Function to load the Razorpay script dynamically

const PlantsPage = () => {
  const { plantName } = useParams();

  useEffect(() => {}, []);

  return (
    <div>
      <Plants plantName={plantName} />
    </div>
  );
};

export default PlantsPage;
