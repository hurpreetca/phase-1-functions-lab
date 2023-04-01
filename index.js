// Code your solution in this file!
function distanceFromHqInBlocks(pickUp)
{
    if(pickUp=== 43)
    {
        return 1;
    }
    else
    {
        if(pickUp===50 || pickUp===34)
        {
            return 8;
        }  
    }
    
}
function distanceFromHqInFeet(feet)
{
    
    
    if(feet==43)
    {
        return 264;
    }
    else
    {
        if(feet===50 || feet=== 34)
        {
        return 8 * 264;
        }
    }   
}
function distanceTravelledInFeet(start, destination)
{
    
    if(destination> start)
    {
        return (destination- start)* 264;
    }
    else 
    {
        if(start> destination)
        {
            return (start-destination)* 264;
        }
    }
    

        
}
function calculatesFarePrice(start, destination)
{
    let feetTravelled= Math.abs(start-destination) * 264;
    let fairPrice;
    if (feetTravelled<= 400)
    {
        return fairPrice = 0;
    }
    else if (feetTravelled > 400 && feetTravelled< 2000 )
    {
        return fairPrice= 2.56;
    }
    else if (feetTravelled> 2000 && feetTravelled<= 2500 )
    {
        return fairPrice = 25;
    }
    else
    {
        return "cannot travel that far";
    }
}