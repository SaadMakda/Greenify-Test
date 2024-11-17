import csv
import random
from typing import List, Dict

# Define data classes for Offices and States
class Office:
    def __init__(self, name: str, state: str, city: str, coordinates: List[float]):
        self.name = name
        self.state = state
        self.city = city
        self.coordinates = coordinates  # [latitude, longitude]
        self.emissionScore = None 

class State:
    def __init__(self, name: str):
        self.name = name
        self.offices = []  # List of Office objects
        self.emissionScore = None  # To be calculated

# Function to simulate emission data for an office
def calculate_office_emission_score(office: Office) -> float:
    """
    Simulates the calculation of an office's emission score.
    In a real-world scenario, this function would use actual data.
    """
    # Simulate factors affecting emission score
    factors = {
        'energy_usage': random.uniform(50, 200),  # in kWh per square meter
        'renewable_energy_percentage': random.uniform(0, 100),  # in %
        'waste_generated': random.uniform(0.1, 2.0),  # in kg per employee per day
        'commute_distance': random.uniform(1, 50),  # average km per employee
        'carbon_offset': random.uniform(0, 50),  # in tonnes CO2 equivalent
    }

    # Simple formula to calculate emission score
    # The lower the energy usage and waste, the better.
    # Higher renewable energy percentage and carbon offset improve the score.
    score = (
        factors['energy_usage'] * 0.4 +
        (100 - factors['renewable_energy_percentage']) * 0.3 +
        factors['waste_generated'] * 10 * 0.1 +
        factors['commute_distance'] * 0.1 +
        (50 - factors['carbon_offset']) * 0.1
    )

    # Normalize the score to a 0-100 scale
    score = max(0, min(100, score))
    office.emissionScore = round(score, 2)
    return office.emissionScore

# Function to calculate the emission score for a state based on its offices
def calculate_state_emission_score(state: State) -> float:
    """
    Calculates the state's emission score as the average of its offices' scores.
    """
    if not state.offices:
        return None

    total_score = sum(office.emissionScore for office in state.offices if office.emissionScore is not None)
    num_offices = len([office for office in state.offices if office.emissionScore is not None])

    if num_offices == 0:
        return None

    state.emissionScore = round(total_score / num_offices, 2)
    return state.emissionScore

# Main function to orchestrate the calculations
def main():
    # Load offices data (Here, we'll simulate the data)
    offices_data = [
        # Example data; replace with actual data loading logic
        Office("Birmingham Commercial Real Estate", "Alabama", "Birmingham", [33.43773422187041, -86.73200036448158]),
        Office("Phoenix Commercial Real Estate", "Arizona", "Phoenix", [33.50832015149481, -112.02632407585948]),
        # Add more offices as needed...
    ]

    # Create a dictionary to hold State objects
    states_dict: Dict[str, State] = {}

    # Calculate emission scores for each office
    for office in offices_data:
        # Calculate and assign the emission score for the office
        calculate_office_emission_score(office)

        # Add the office to its state's list
        if office.state not in states_dict:
            states_dict[office.state] = State(office.state)
        states_dict[office.state].offices.append(office)

    # Calculate emission scores for each state
    for state in states_dict.values():
        calculate_state_emission_score(state)

    # Output the results
    print("Office Emission Scores:")
    for office in offices_data:
        print(f"{office.name} ({office.city}, {office.state}): {office.emissionScore}%")

    print("\nState Emission Scores:")
    for state_name, state in states_dict.items():
        print(f"{state_name}: {state.emissionScore}%")

    # Optionally, write the results to CSV files
    write_office_emission_scores(offices_data)
    write_state_emission_scores(states_dict)

def write_office_emission_scores(offices: List[Office]):
    """
    Writes the office emission scores to a CSV file.
    """
    with open('office_emission_scores.csv', mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Office Name', 'City', 'State', 'Emission Score'])
        for office in offices:
            writer.writerow([office.name, office.city, office.state, office.emissionScore])

def write_state_emission_scores(states: Dict[str, State]):
    """
    Writes the state emission scores to a CSV file.
    """
    with open('state_emission_scores.csv', mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['State', 'Emission Score'])
        for state_name, state in states.items():
            writer.writerow([state_name, state.emissionScore])

if __name__ == '__main__':
    main()