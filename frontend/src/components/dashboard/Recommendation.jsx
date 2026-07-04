import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, PiggyBank } from "lucide-react";

function Recommendation() {
  return (
    <motion.div
      className="recommendation-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>AI Recommendations</h2>

      <div className="recommendation-list">
        <motion.div className="recommendation-item" whileHover={{ x: 8 }}>
          <div className="recommend-icon">
            <Lightbulb size={24} />
          </div>
          <p>Reduce unnecessary spending in entertainment category.</p>
        </motion.div>

        <motion.div className="recommendation-item" whileHover={{ x: 8 }}>
          <div className="recommend-icon">
            <TrendingUp size={24} />
          </div>
          <p>Try saving at least 20% of your monthly income.</p>
        </motion.div>

        <motion.div className="recommendation-item" whileHover={{ x: 8 }}>
          <div className="recommend-icon">
            <PiggyBank size={24} />
          </div>
          <p>Create category-wise spending limits for better control.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Recommendation;
