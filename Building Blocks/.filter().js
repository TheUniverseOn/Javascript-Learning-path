var companies = [
    {id: 20, industry: "BioTech", start: 1994, end: 1999 }, 
    {id: 24, industry: "FinTech", start: 1992, end: 1997}, 
    {id: 56, industry: "EdTech", start: 190,  end: 1994}, 
    {id: 88, industry: "ConsumerTech", start: 1993, end: 1998}, 
    ];


//Filtering only biotech companies 


const biotech = companies.filter(function(bioCo){
    if(bioCo.industry === "BioTech"){
      return true; 
    } 
}); 



// Using Arrrow funcrtion we can simplify the above code like this 
const Bio = companies.filter(biostartups => biostartups.industry === "BioTech")
    console.log(Bio);

//[ { id: 20, industry: 'BioTech', start: 1994, end: 1999 } ] 

